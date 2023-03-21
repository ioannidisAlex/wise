import Card from "./Card";

import "./MenuCards.css";

const MenuCards = (props) => {
	const articles = [
		{
			article: {
				color: "FEC006",
				title: "Snow in Turkey Brings Travel Woes",
				thumbnail: "",
				category: "News",
				excerpt:
					"Heavy snowstorm in Turkey creates havoc as hundreds of villages left without power, and hundreds of roads closed",
				date: new Date(),
			},
		},
		{
			article: {
				color: "2196F3",
				title: "Landslide Leaving Thousands Homeless",
				thumbnail: "",
				category: "News",
				excerpt:
					"An aburt landslide in the Silcon Valley has left thousands homeless and on the streets.",
				date: new Date(),
			},
		},
		{
			article: {
				color: "FE5621",
				title: "Hail the size of baseballs in New York",
				thumbnail: "",
				category: "News",
				excerpt:
					"A rare and unexpected event occurred today as hail the size of snowball hits New York citizens.",
				date: new Date(),
			},
		},
		{
			article: {
				color: "673AB7",
				title: "Earthquake destorying San Fransisco",
				thumbnail: "",
				category: "News",
				excerpt:
					"A massive earthquake just hit San Fransisco leaving behind a giant crater.",
				date: new Date(),
			},
		},
	];

	return (
		<div className="wdpg">
			{articles.map((instance, i) => {
				return (
					<Card
						key={i}
						title={instance.article.title}
						description={instance.article.excerpt}
					/>
				);
			})}
		</div>
	);
};

export default MenuCards;
