CREATE TABLE IF NOT EXISTS public.codelang
(
    id integer NOT NULL DEFAULT nextval('codelang_id_seq'::regclass),
    name character varying(20) COLLATE pg_catalog."default" NOT NULL,
    description character varying(150) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT codelang_pkey PRIMARY KEY (id),
    CONSTRAINT codelang_name_key UNIQUE (name)
)

CREATE TABLE IF NOT EXISTS public.tasktype
(
    id integer NOT NULL DEFAULT nextval('tasktype_id_seq'::regclass),
    name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    description character varying(200) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT tasktype_pkey PRIMARY KEY (id),
    CONSTRAINT tasktype_name_key UNIQUE (name)
)

CREATE TABLE IF NOT EXISTS public.workflow
(
    id integer NOT NULL DEFAULT nextval('workflow_id_seq'::regclass),
    name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    description character varying(500) COLLATE pg_catalog."default" NOT NULL DEFAULT 'undefined'::character varying,
    application character varying(50) COLLATE pg_catalog."default",
    fpath character varying(500) COLLATE pg_catalog."default",
    updated date NOT NULL DEFAULT CURRENT_DATE,
    CONSTRAINT workflow_pkey PRIMARY KEY (id),
    CONSTRAINT workflow_name_key UNIQUE (name)
)

CREATE TABLE IF NOT EXISTS public.task
(
    id integer NOT NULL DEFAULT nextval('task_id_seq'::regclass),
    tasktype_id integer NOT NULL,
    codelang_id integer NOT NULL,
    workflow_id integer NOT NULL,
    orden integer NOT NULL,
    name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default",
    files text COLLATE pg_catalog."default",
    folders text COLLATE pg_catalog."default",
    final boolean DEFAULT false,
    CONSTRAINT task_pkey PRIMARY KEY (id),
    CONSTRAINT task_name_key UNIQUE (name),
    CONSTRAINT task_codelang_id_fkey FOREIGN KEY (codelang_id)
        REFERENCES public.codelang (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE,
    CONSTRAINT task_tasktype_id_fkey FOREIGN KEY (tasktype_id)
        REFERENCES public.tasktype (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE,
    CONSTRAINT task_workflow_id_fkey FOREIGN KEY (workflow_id)
        REFERENCES public.workflow (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
)

CREATE TABLE IF NOT EXISTS public.apptype
(
    id integer NOT NULL DEFAULT nextval('apptype_id_seq'::regclass),
    name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    description character varying(255) COLLATE pg_catalog."default" NOT NULL DEFAULT 'undefined'::character varying,
    CONSTRAINT apptypes_pkey PRIMARY KEY (id),
    CONSTRAINT apptypes_name_key UNIQUE (name)
)

CREATE TABLE IF NOT EXISTS public.application
(
    id integer NOT NULL DEFAULT nextval('aplication_id_seq'::regclass),
    apptype_id integer NOT NULL DEFAULT 0,
    codelang_id integer NOT NULL,
    name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    description character varying(255) COLLATE pg_catalog."default" NOT NULL DEFAULT 'undefined'::character varying,
    repository character varying(250) COLLATE pg_catalog."default" NOT NULL DEFAULT 'undefined'::character varying,
    author character varying(100) COLLATE pg_catalog."default",
    osystem character varying(100) COLLATE pg_catalog."default",
    appurl character varying(500) COLLATE pg_catalog."default",
    apppath character varying(500) COLLATE pg_catalog."default",
    localdev boolean NOT NULL DEFAULT true,
    usedocker boolean NOT NULL DEFAULT false,
    controlusers boolean NOT NULL DEFAULT false,
    useui boolean NOT NULL DEFAULT false,
    useagents boolean NOT NULL DEFAULT false,
    consumedb boolean NOT NULL DEFAULT false,
    consumeapi boolean NOT NULL DEFAULT false,
    consumeai boolean NOT NULL DEFAULT false,
    exposedb boolean NOT NULL DEFAULT false,
    exposeapi boolean NOT NULL DEFAULT false,
    updated date NOT NULL DEFAULT CURRENT_DATE,
    CONSTRAINT aplication_pkey PRIMARY KEY (id),
    CONSTRAINT aplication_name_key UNIQUE (name),
    CONSTRAINT aplication_apptype_id_fkey FOREIGN KEY (apptype_id)
        REFERENCES public.apptype (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE,
    CONSTRAINT aplication_codelang_id_fkey FOREIGN KEY (codelang_id)
        REFERENCES public.codelang (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
)
