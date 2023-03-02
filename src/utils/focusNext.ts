import getTabElements from "@/utils/getTabElements";

type TabElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | HTMLButtonElement | HTMLAnchorElement

const focusNext = (e: KeyboardEvent) => {
    const tabElements = getTabElements();
    const index = tabElements.indexOf(e.target as TabElement);
    if (index >= 0 && index < tabElements.length - 1) {
        tabElements[index + 1].focus();
    }
}

export default focusNext;

