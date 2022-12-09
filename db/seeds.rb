# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts '🌱 Seeding rooms...'

Room.create!([
  {
    name: 'Two bedroom',
    image: 'https://images.unsplash.com/photo-1605346576608-92f1346b67d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    price: 150.99
  },
  {
    name: 'Studio room',
    image: 'https://images.unsplash.com/photo-1605346576608-92f1346b67d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    price: 250.98
  },
  {
    name: 'Master Ensuite',
    image: 'https://images.unsplash.com/photo-1605346576608-92f1346b67d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    price: 50.99
  },
  {
    name: 'Single room',
    image: 'https://images.unsplash.com/photos/XTC538P_eWk',
    price: 12.11
  },
#   {
#     id: 5,
#     name: 'Jade',
#     image: './images/jade.jpg',
#     price: 10.37
#   },
  {
    name: 'Double bed room',
    image: 'https://images.unsplash.com/photo-1605346576608-92f1346b67d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    price: 25.99
  },
  {
    name: 'Single Room',
    image: './images/img8.jpg',
    price: 55
  }
])






puts '✅ Done seeding!'
