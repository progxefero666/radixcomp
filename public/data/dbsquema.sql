-- Table: public.proglanguage

-- DROP TABLE IF EXISTS public.proglanguage;

CREATE TABLE IF NOT EXISTS public.proglanguage
(
    id character varying(16)[] COLLATE pg_catalog."default" NOT NULL,
    name character varying(16) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT proglanguage_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.proglanguage
    OWNER to postgres;