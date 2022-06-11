import "./card-list.styles.css";

const CardList = ({ monsterList }) => {
  return (
    <div className="card-container">
      {monsterList.map((monster) => {
        return (
          <div className="monster-card">
            <img src={`https://robohash.org/${monster.id}/monster`} alt="" />
            <h2 key={monster.id}>{monster.name}</h2>
            <p key={monster.email}>{monster.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
