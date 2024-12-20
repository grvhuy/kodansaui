"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import Underline from "@tiptap/extension-underline";
import Image from "@tiptap/extension-image";
import Youtube from "@tiptap/extension-youtube";
import Focus from "@tiptap/extension-focus";
import Dropcursor from "@tiptap/extension-dropcursor";
import TextAlign from "@tiptap/extension-text-align";
import { useCallback } from "react";

const Tiptap = ({ onChange, content }: any) => {
  const handleChange = (newContent: string) => {
    onChange(newContent);
  };
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Image,
      Dropcursor,
      Focus.configure({
        className: "has-focus",
        mode: "all",
      }),
      Youtube,
      TextAlign.configure({
        alignments: ["left", "center", "right"],
        defaultAlignment: "left",
        types: ["heading", "paragraph"],
      }),
    ],
    autofocus: true,
    editorProps: {
      attributes: {
        class:
          "flex flex-col px-4 py-3 justify-start border-b border-r border-l border-gray-700 text-black items-start w-full gap-3 font-medium text-[16px] pt-4 rounded-bl-md rounded-br-md outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML());
    },
  });

  const addImage = useCallback(() => {
    const url = window.prompt("URL");

    if (url && editor) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  const handlePaste = useCallback(
    (clipboardData: any) => {
      const pastedData = clipboardData.getData("text/plain");
      const youtubeRegex =
        /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

      if (youtubeRegex.test(pastedData)) {
        const videoId = pastedData.match(youtubeRegex)[1];
        const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoId}`;

        if (editor) {
          editor
            .chain()
            .focus()
            .setYoutubeVideo({ src: youtubeEmbedUrl })
            .run();
        }
      }
    },
    [editor]
  );

  return (
    <div className="w-full p-10">
      <Toolbar editor={editor} content={content} />
      <EditorContent
        style={{
          whiteSpace: "pre-line",
          lineHeight: "1.6",
        }}
        editor={editor}
        onPaste={handlePaste}
      />
    </div>
  );
};

export default Tiptap;
