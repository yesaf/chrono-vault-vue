import type {Ref} from "vue";

const setRefOnChange = (ref: Ref<string>) => (e: Event) => {
    ref.value = (e.target as HTMLInputElement).value;
}

export default setRefOnChange;
