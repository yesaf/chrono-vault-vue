import type {Ref} from "vue";

export const onInputChange = (ref: Ref<string>) => (e: Event) => {
    ref.value = (e.target as HTMLInputElement).value;
}
