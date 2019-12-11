create table users (
    id serial primary key,
    username varchar(100),
    password varchar(100),
    profile_pic text
);

create table posts (
    id serial primary key,
    title varchar(45),
    img text,
    content text,
    author_id integer references users (id)
);

insert into users
(username, password, profile_pic)
values
('izzy@iz.com', 'cj', 'https://cbsaustin.com/resources/media/1fc69b6d-ff12-40be-bf7e-842ec3602f88-large16x9_king.jpeg?1568750616360'),
('drew@drew.com', 'paul', 'https://images2.minutemediacdn.com/image/upload/c_crop,h_897,w_1600,x_0,y_456/f_auto,q_auto,w_1100/v1569003566/shape/mentalfloss/58341-gettyimages-1070115340.jpg'),
('seth@seth.com', 'sj', 'https://media.phillyvoice.com/media/images/120919_HalloweenPumpkin.2e16d0ba.fill-735x490.jpg')

insert into posts 
(title, img, content, author_id)
values
('haunted house', 'https://thenypost.files.wordpress.com/2019/10/halloween-000.jpeg?quality=90&strip=all&w=618&h=410&crop=1', 'scary girl in the corner', 1),
('my cat', 'http://cdn.shopify.com/s/files/1/0997/4496/files/Capture_dd32f6f2-800d-4a9c-8c8f-8b1600582baa_grande.PNG?v=1538166220', 'my black cat', 2),
('pumpkin', 'https://d3i6fh83elv35t.cloudfront.net/newshour/app/uploads/2014/10/138687537-1024x682.jpg', 'i am amazing', 3)