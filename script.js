const upload = document.querySelector('.upload');
const download = document.querySelector('.download');
const hiddenButton = document.querySelector('#hidden-button');
const input = document.querySelector('#slider-input');
const inputValue = document.querySelector('.input-value');

const inputMetadata = document.getElementsByClassName('metadata')[0];
const outputMetadata = document.getElementsByClassName('metadata')[1];

let originalFile = null;
let originalURL = null;
let compressedURL = null;

// Disable controls initially
input.disabled = true;
inputValue.disabled = true;
download.disabled = true;

// Preview slider
input.oninput = function () {
    const topLayer = document.querySelector('.img-overlay');
    const containerWidth = document.querySelector('.img-compare').offsetWidth;
    topLayer.style.width = (containerWidth * input.value) / 100 + 'px';
};

// Upload click
upload.onclick = () => hiddenButton.click();

// File selection
hiddenButton.onchange = () => {
    const file = hiddenButton.files[0];
    if (!file || !file.type.startsWith('image/')) {
        alert('Please upload a valid image file');
        return;
    }

    if (file.size > 5 * 1024 * 1024) {
        alert('Please upload image smaller than 5MB');
        return;
    }

    originalFile = file;

    if (originalURL) URL.revokeObjectURL(originalURL);
    originalURL = URL.createObjectURL(file);

    const img = new Image();
    img.src = originalURL;

    img.onload = () => {
        const w = img.width;
        const h = img.height;

        // Input metadata
        inputMetadata.children[0].querySelector('span').textContent = file.name;
        inputMetadata.children[1].querySelector('span').textContent = `${w}/${h}`;
        inputMetadata.children[2].querySelector('span').textContent =
            (file.size / (1024 * 1024)).toFixed(2) + ' MB';

        document.querySelector('.img-original').src = originalURL;

        upload.setAttribute('filename', file.name);

        input.disabled = false;
        inputValue.disabled = false;

        compressImage(inputValue.value, w, h);
    };
};

// Quality slider
inputValue.oninput = function () {
    if (!originalFile) return;
    compressImage(this.value);
};

// Compression logic
function compressImage(sliderValue) {
    const quality = (100 - sliderValue) / 100;

    new Compressor(originalFile, {
        quality,
        success(result) {
            if (compressedURL) URL.revokeObjectURL(compressedURL);
            compressedURL = URL.createObjectURL(result);

            document.querySelector('.output').style.display = 'block';
            document.querySelector('.progress').style.display = 'block';
            document.querySelector('.preview-container').style.display = 'block';

            const img = new Image();
            img.src = compressedURL;

            img.onload = () => {
                document.querySelector('.img-compressed').src = compressedURL;

                const compression = ((1 - result.size / originalFile.size) * 100).toFixed(0);

                outputMetadata.children[0].querySelector('span').textContent = compression + '%';
                outputMetadata.children[1].querySelector('span').textContent = `${img.width}/${img.height}`;
                outputMetadata.children[2].querySelector('span').textContent = (result.size / 1024).toFixed(0) + ' KB';

                download.disabled = false;
            };

            download.onclick = () => {
                const [name, ext] = upload.getAttribute('filename').split('.');
                const a = document.createElement('a');
                a.href = compressedURL;
                a.download = `${name}-compressed.${ext}`;
                a.click();
            };
        },
        error(err) {
            console.error(err.message);
        }
    });
}
