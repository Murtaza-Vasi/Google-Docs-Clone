import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { db } from '../firebase';
import { useRouter } from 'next/dist/client/router';
import { useSession } from 'next-auth/client';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useDocumentOnce } from 'react-firebase-hooks/firestore';

const Editor = dynamic(
	import('react-draft-wysiwyg').then((module) => module.Editor),
	{
		ssr: false,
	}
);

const TextEditor = () => {
	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	const [session] = useSession();

	const router = useRouter();
	const { id } = router.query;

	const [snapshot] = useDocumentOnce(
		db.collection('userDocs').doc(session.user.email).collection('docs').doc(id)
	);

	const onEditorStateChange = (editorState) => {
		setEditorState(editorState);
		db.collection('userDocs')
			.doc(session.user.email)
			.collection('docs')
			.doc(id)
			.set(
				{
					editorState: convertToRaw(editorState.getCurrentContent()),
				},
				{ merge: true }
			);
	};

	useEffect(() => {
		if (snapshot?.data()?.editorState) {
			setEditorState(
				EditorState.createWithContent(
					convertFromRaw(snapshot?.data()?.editorState)
				)
			);
		}
	}, [snapshot]);

	return (
		<div className='bg-[#F8F9FA] min-h-screen pb-16'>
			<Editor
				editorState={editorState}
				toolbarClassName='flex sticky top-0 z-50 !justify-center mx-auto'
				editorClassName='mt-6 bg-white shadow-lg max-w-6xl mx-auto mb-12 p-10 border'
				onEditorStateChange={onEditorStateChange}
			/>
		</div>
	);
};

export default TextEditor;
