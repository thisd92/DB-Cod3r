ALTER TABLE
    empresas
MODIFY
    cnpj VARCHAR(14);

INSERT INTO
    empresas (nome, cnpj)
VALUES
    ('Bradesco', 91540877000132),
    ('Vale', 35698744000155),
    ('Cielo', 01598563000188);

DESC empresas;
DESC prefeitos;

SELECT * FROM empresas;
SELECT * FROM cidades;

INSERT INTO
    empresas_unidades (empresa_id, cidade_id, sede)
VALUES
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);