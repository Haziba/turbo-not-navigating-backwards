class CreateComments < ActiveRecord::Migration[7.1]
  def change
    create_table :comments do |t|
      t.string :poster
      t.string :message

      t.timestamps
    end
  end
end
