SELECT
    *
FROM
    estados e,
    cidades c
WHERE
    e.id = c.estado_id;

--------------------------------------
SELECT
    e.nome as Estado,
    c.nome as Cidade,
    regiao
FROM
    estados e,
    cidades c
WHERE
    e.id = c.estado_id;

--------------------------------------
SELECT
    c.nome as Cidade,
    e.nome as Estado,
    regiao as Região
FROM
    estados e
    INNER JOIN cidades c on e.id = c.estado_id