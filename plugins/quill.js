import Vue from "vue";
import VueQuillEditor from "vue-quill-editor";

// require styles
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

var editorOptions = {
    placeholder: 'なんか書け！',
    modules: {
        toolbar: [
            ["bold", "italic", "underline"],
            ["link", "image"],
            [{
                    indent: "-1",
                },
                {
                    indent: "+1",
                },
            ],
            [{
                    list: "ordered",
                },
                {
                    list: "bullet",
                },
            ],
            [{
                size: ["small", false, "large", "huge"],
            }, ],
            [{
                header: [1, 2, 3, 4, 5, 6, false],
            }, ],
        ],
        keyboard: {
            bindings: {
                tab: false,
            },
        },

    },
    theme: 'snow'
};

Vue.use(VueQuillEditor, editorOptions);
