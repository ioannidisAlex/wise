import React from "react";

const Card = (props) => {
  return (
    <div className="wrapper">
      <div className="card">
        <div className="card__body">
          <h2 className="card__title">{props.title}</h2>
          <p className="card__description">{props.description}</p>
        </div>
      </div>
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
