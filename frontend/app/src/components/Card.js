const Card = (props) => {
  console.log(props);
  return (
    <div className="card">
      <h2 className="card__title">{props.title}</h2>
      <p className="card__description">{props.description}</p>
    </div>
  );
};

export default Card;

// Card(props) {
//   return (
//     <View style={styles.card}>
//       <View style={styles.cardContent}>{props.children}</View>
//     </View>
//   );
// }
