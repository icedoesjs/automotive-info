import '../../styles/pages/news.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import getRss from '../../utils/rss';

export default async function News() {
    const feed = await getRss();
    return (
        <div>
            <div className="top-container">
                <h1>Latest Automotive News</h1>
                <p className="top-caption text-muted">View news from <span className="provider">Car and Driver</span> related to the latest automotive news</p>
            </div>
            <div className="news-container">
                <div className='row row-cols-3'>
                {feed.map((item) => (
                    <div className="card news-card">
                        <img src="https://www.autotrader.com/wp-content/uploads/2022/04/2023-kia-seltos.jpg" className="card-img-top news-img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title news-title">{item.title}</h5>
                            <p className="card-text">{item.contentSnippet}</p>
                        </div>
                        <a href={item.link}>View Article →</a>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
};

