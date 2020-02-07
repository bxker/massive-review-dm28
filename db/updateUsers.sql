UPDATE users
SET username = $1,
    fav_color = $2
WHERE
    user_id = $3;

SELECT * FROM users;