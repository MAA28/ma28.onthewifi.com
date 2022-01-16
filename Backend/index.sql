-- @block
CREATE TABLE Blogs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(255),
    content TEXT,
    date_of_last_edit VARCHAR(8)
);

-- @block
INSERT INTO Blogs VALUES (
    "Brief an das Göttinger Tageblatt",
    "#LOl",
    "20220116"
);


-- @block
SELECT *
FROM Blogs;