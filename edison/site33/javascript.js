const textarea = document.querySelector("textarea");
const count = document.querySelector(".count");

textarea.addEventListener('keydown', () => {
    const textWithoutSpace = textarea.value.replace(/\s/g, '');
    count.innerText = textWithoutSpace.length;
})

