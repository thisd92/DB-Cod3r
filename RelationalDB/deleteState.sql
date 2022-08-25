-- Inserção de estados inexistentes
INSERT INTO estados (id, nome, sigla, regiao, populacao)
VALUES (1000, 'Novo', 'NV', 'Sul', 2.54)

INSERT INTO estados (nome, sigla, regiao, populacao)
VALUES ('New', 'Nw', 'Norte', 2.51)

SELECT * FROM estados

-- Delete
DELETE FROM estados WHERE sigla = 'Nw'

DELETE FROM estados WHERE id >= 1000