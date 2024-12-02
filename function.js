const apiKey = 'YOUR_NEWS_API_KEY';
const newsContainer = document.getElementById('newsContainer');

async function fetchNews() {
  const response = await fetch(`https://newsapi.org/v2/top-headlines?category=technology&apiKey=${apiKey}`);
  const data = await response.json();

  data.articles.forEach(article => {
    const newsCard = `<div class="news-card">
                        <h3>${article.title}</h3>
                        <p>${article.description}</p>
                        <a href="${article.url}" target="_blank">Read more</a>
                      </div>`;
    newsContainer.innerHTML += newsCard;
  });
}

fetchNews();
