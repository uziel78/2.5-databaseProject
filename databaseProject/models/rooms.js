module.exports = (sequelize, Sequelize) => {
  const Room = sequelize.define(
    'Room',
    {
      PricePerDay: Sequelize.DataTypes.DECIMAL,
      Capacity: Sequelize.DataTypes.INTEGER,
    },
    {
      timestamps: false,
    }
  );
  return Room;
};
