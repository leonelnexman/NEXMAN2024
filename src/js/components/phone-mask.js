window.addEventListener("DOMContentLoaded", () => {
    Array.from(document.querySelectorAll('.tel')).forEach((input) => {
        function mask(event) {
            const { keyCode } = event;
            const pos = this.selectionStart;
            if (pos < 3) event.preventDefault();

            const matrix = "+7 (___)- ___ - __ - __";
            let i = 0;
            const def = matrix.replace(/\D/g, "");
            const val = this.value.replace(/\D/g, "");
            let newValue = matrix.replace(/[_\d]/g, (a) => {
                if (i < val.length) {
                    const char = val.charAt(i);
                    i += 1;
                    return char;
                } 
                    return a;
                
            });

            i = newValue.indexOf("_");
            if (i !== -1) {
                if (i < 5) {
                    i = 3;
                }
                newValue = newValue.slice(0, i);
            }

            let reg = matrix
                .substr(0, this.value.length)
                .replace(/_+/g, (a) => `\\d{1,${a.length}}`)
                .replace(/[+()]/g, "\\$&");
            reg = new RegExp(`^${reg}$`);

            if (!reg.test(this.value) || this.value.length < 5 || (keyCode > 47 && keyCode < 58)) {
                this.value = newValue;
            }
            if (event.type === "blur" && this.value.length < 5) {
                this.value = "";
            }
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false);
    });
});
