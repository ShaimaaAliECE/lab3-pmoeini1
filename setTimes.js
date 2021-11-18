export default function setTimes(isAdmin, times, name) {
    let conn = mysql.createConnection({
        host: '34.72.236.12',
        user: 'root',
        password: 'password',
        database: 'MyStoreDB',
    });
    
    conn.connect();
    // allow admin to change times in AdminTimes table
    if (isAdmin) {
        // delete all current available times
        conn.query(
            'DELETE FROM AdminTimes',
            (err, rows, fields) => {
                if (err) {
                    console.log(err);
                }
            }
        )
        // add all new available times
        for (t in times) {
            conn.query(
                'INSERT INTO AdminTimes VALUES ("' + t + '")',
                (err, rows, fields) => {
                    if (err) {
                        console.log(err);
                    }
                }
            )
        }
    } else {
        // allow guests to list their availability with their name
    }
    conn.end();
};