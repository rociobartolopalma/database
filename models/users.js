const usermodels = {
getAll: `
    SELECT 
    * 
    FROM 
    user`,

getByID: `
    SELECT
    *
    FROM
    user
    WHERE
    id= ?
    `,

addRow:`
    INSERT INTO
    user(
        username,
        email,
        password,
        name,
        lastname,
        phone_num,
        role_id,
        id_active
    )
    VALUES (
        ?,?,?,?,?,?,?,?
    )`,

getByUsername:`
    SELECT 
    * 
    FROM 
    user 
    WHERE username =?
    `,

getByEmail:`
    SELECT 
    id 
    FROM 
    user 
    WHERE 
    email =?
    `,

updateUser:`
    UPDATE
    user
    SET
        username = ?,
        email = ?,
        password = ?,
        name = ?,
        lastname = ?,
        phone_num = ?,
        role_id = ?,
        id_active = ?
        WHERE 
        id =?
    `,

deleteRow:`
    UPDATE 
    user
    SET
    id_active =0
    WHERE 
    id=?
    `,  
}

module.exports = usermodels;