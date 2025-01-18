import axios from 'axios';
import fs from 'fs';
import path from 'path';

const UNSPLASH_ACCESS_KEY = 'your_unsplash_access_key';

async function downloadImage(url: string, filepath: string) {
  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream'
  });

  return new Promise((resolve, reject) => {
    response.data
      .pipe(fs.createWriteStream(filepath))
      .on('finish', resolve)
      .on('error', reject);
  });
}

async function getProductImages() {
  const categories = ['jewelry', 'rings', 'necklaces', 'bracelets'];
  
  for (const category of categories) {
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?query=${category}&per_page=10`,
      {
        headers: {
          Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
        }
      }
    );

    for (const [index, photo] of response.data.results.entries()) {
      const filepath = path.join(__dirname, `../public/products/${category}/${index + 1}.jpg`);
      await downloadImage(photo.urls.regular, filepath);
      console.log(`Downloaded ${category} image ${index + 1}`);
    }
  }
}

getProductImages().catch(console.error); 