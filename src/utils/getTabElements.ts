type TabElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | HTMLButtonElement | HTMLAnchorElement;

const getTabElements = (): Array<TabElement> => {
    const result = Array.from(document.querySelectorAll("input, select, textarea, button, a[href], [tabindex]"))
        .filter((el) => {
            const tabIndex = Number(el.getAttribute("tabindex"));
            return !Number.isNaN(tabIndex) && tabIndex >= 0;
        })
        .sort((a, b) => {
            const aTabIndex = Number(a.getAttribute("tabindex"));
            const bTabIndex = Number(b.getAttribute("tabindex"));
            return aTabIndex - bTabIndex;
        });
    return result as Array<TabElement>;
}

export default getTabElements;
