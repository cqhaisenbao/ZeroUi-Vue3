import Dialog from "./Dialog.vue";
import {createApp, h} from "vue";

export const openDialog = (options: DialogOptions) => {
    const {title, content, ok, cancel} = options;
    const div = document.createElement('div');
    document.body.appendChild(div);
    const close = () => {
        app.unmount();
        div.remove();
    };
    const app = createApp({
        render() {
            return h(Dialog, {
                visible: true,
                cancel,
                ok,
                'onUpdate:visible': (val: Boolean) => {
                    if (!val) {
                        close();
                    }
                }
            }, {
                title() {
                    return h('h2', title);
                },
                content() {
                    return h('p', {
                        style: {
                            color: '#ff9900'
                        }
                    }, content);
                }
            });
        }
    });
    app.mount(div);
};
