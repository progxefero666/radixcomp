
CREATE TABLE IF NOT EXISTS public.proglanguage
(
    id character(16) COLLATE pg_catalog."default" NOT NULL,
    name character varying(16) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT proglanguage_pkey PRIMARY KEY (id)
	
);

CREATE TABLE IF NOT EXISTS public.template
(
    id character(16) COLLATE pg_catalog."default" NOT NULL,
    name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    proglanguage_id character(16) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT template_pkey PRIMARY KEY (id),
 
    constraint template_proglanguage_id_fkey foreign key (proglanguage_id)
        references public.proglanguage (id)
        on delete cascade	
);