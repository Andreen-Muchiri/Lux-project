class CreateHotels < ActiveRecord::Migration[7.0]
  def change
    create_table :hotels do |t|
      t.string :city
      t.string :name
      t.string :room_type
      t.float :price

      t.timestamps
    end
  end
end
