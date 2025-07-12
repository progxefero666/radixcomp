--
-- PostgreSQL database dump
--

-- Dumped from database version 17.5
-- Dumped by pg_dump version 17.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: application; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.application (
    id integer NOT NULL,
    apptype_id integer DEFAULT 0 NOT NULL,
    codelang_id integer NOT NULL,
    anname character varying(50) NOT NULL,
    description character varying(255) DEFAULT 'undefined'::character varying NOT NULL,
    repository character varying(250) DEFAULT 'undefined'::character varying NOT NULL,
    author character varying(100),
    osystem character varying(100),
    appurl character varying(500),
    apppath character varying(500),
    localdev boolean DEFAULT true NOT NULL,
    usedocker boolean DEFAULT false NOT NULL,
    controlusers boolean DEFAULT false NOT NULL,
    useui boolean DEFAULT false NOT NULL,
    useagents boolean DEFAULT false NOT NULL,
    consumedb boolean DEFAULT false NOT NULL,
    consumeapi boolean DEFAULT false NOT NULL,
    consumeai boolean DEFAULT false NOT NULL,
    exposedb boolean DEFAULT false NOT NULL,
    exposeapi boolean DEFAULT false NOT NULL,
    updated date NOT NULL
);


ALTER TABLE public.application OWNER TO postgres;

--
-- Name: application_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.application_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.application_id_seq OWNER TO postgres;

--
-- Name: application_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.application_id_seq OWNED BY public.application.id;


--
-- Name: apptype; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.apptype (
    id integer NOT NULL,
    aename character varying(50) NOT NULL,
    description character varying(255) DEFAULT 'undefined'::character varying NOT NULL
);


ALTER TABLE public.apptype OWNER TO postgres;

--
-- Name: apptype_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.apptype_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.apptype_id_seq OWNER TO postgres;

--
-- Name: apptype_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.apptype_id_seq OWNED BY public.apptype.id;


--
-- Name: codelang; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.codelang (
    id integer NOT NULL,
    cgname character varying(20) NOT NULL,
    description character varying(150) NOT NULL
);


ALTER TABLE public.codelang OWNER TO postgres;

--
-- Name: codelang_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.codelang_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.codelang_id_seq OWNER TO postgres;

--
-- Name: codelang_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.codelang_id_seq OWNED BY public.codelang.id;


--
-- Name: task; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.task (
    id integer NOT NULL,
    tasktype_id integer NOT NULL,
    codelang_id integer NOT NULL,
    workflow_id integer NOT NULL,
    taskcategory_id integer NOT NULL,
    orden integer NOT NULL,
    tkname character varying(255) NOT NULL,
    description text,
    tkgroup integer NOT NULL,
    files text,
    folders text
);


ALTER TABLE public.task OWNER TO postgres;

--
-- Name: task_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.task_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.task_id_seq OWNER TO postgres;

--
-- Name: task_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.task_id_seq OWNED BY public.task.id;


--
-- Name: taskcategory; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.taskcategory (
    id integer NOT NULL,
    workflow_id integer NOT NULL,
    tyname character varying(100) NOT NULL,
    description character varying(100)
);


ALTER TABLE public.taskcategory OWNER TO postgres;

--
-- Name: taskcategory_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.taskcategory_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.taskcategory_id_seq OWNER TO postgres;

--
-- Name: taskcategory_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.taskcategory_id_seq OWNED BY public.taskcategory.id;


--
-- Name: taskgroup; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.taskgroup (
    id integer NOT NULL,
    workflow_id integer NOT NULL,
    tpname character varying(100) NOT NULL,
    description character varying(100)
);


ALTER TABLE public.taskgroup OWNER TO postgres;

--
-- Name: taskgroup_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.taskgroup_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.taskgroup_id_seq OWNER TO postgres;

--
-- Name: taskgroup_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.taskgroup_id_seq OWNED BY public.taskgroup.id;


--
-- Name: tasktype; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tasktype (
    id integer NOT NULL,
    tename character varying(100) NOT NULL,
    description character varying(200) NOT NULL
);


ALTER TABLE public.tasktype OWNER TO postgres;

--
-- Name: tasktype_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tasktype_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.tasktype_id_seq OWNER TO postgres;

--
-- Name: tasktype_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tasktype_id_seq OWNED BY public.tasktype.id;


--
-- Name: workflow; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.workflow (
    id integer NOT NULL,
    wwname character varying(100) NOT NULL,
    context text,
    description text DEFAULT 'undefined'::text NOT NULL,
    application character varying(50),
    fpath character varying(500),
    updated date NOT NULL
);


ALTER TABLE public.workflow OWNER TO postgres;

--
-- Name: workflow_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.workflow_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.workflow_id_seq OWNER TO postgres;

--
-- Name: workflow_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.workflow_id_seq OWNED BY public.workflow.id;


--
-- Name: application id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.application ALTER COLUMN id SET DEFAULT nextval('public.application_id_seq'::regclass);


--
-- Name: apptype id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.apptype ALTER COLUMN id SET DEFAULT nextval('public.apptype_id_seq'::regclass);


--
-- Name: codelang id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.codelang ALTER COLUMN id SET DEFAULT nextval('public.codelang_id_seq'::regclass);


--
-- Name: task id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.task ALTER COLUMN id SET DEFAULT nextval('public.task_id_seq'::regclass);


--
-- Name: taskcategory id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.taskcategory ALTER COLUMN id SET DEFAULT nextval('public.taskcategory_id_seq'::regclass);


--
-- Name: taskgroup id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.taskgroup ALTER COLUMN id SET DEFAULT nextval('public.taskgroup_id_seq'::regclass);


--
-- Name: tasktype id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tasktype ALTER COLUMN id SET DEFAULT nextval('public.tasktype_id_seq'::regclass);


--
-- Name: workflow id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workflow ALTER COLUMN id SET DEFAULT nextval('public.workflow_id_seq'::regclass);


--
-- Name: application aplication_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.application
    ADD CONSTRAINT aplication_name_key UNIQUE (anname);


--
-- Name: application aplication_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.application
    ADD CONSTRAINT aplication_pkey PRIMARY KEY (id);


--
-- Name: apptype apptypes_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.apptype
    ADD CONSTRAINT apptypes_name_key UNIQUE (aename);


--
-- Name: apptype apptypes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.apptype
    ADD CONSTRAINT apptypes_pkey PRIMARY KEY (id);


--
-- Name: codelang codelang_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.codelang
    ADD CONSTRAINT codelang_name_key UNIQUE (cgname);


--
-- Name: codelang codelang_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.codelang
    ADD CONSTRAINT codelang_pkey PRIMARY KEY (id);


--
-- Name: task task_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.task
    ADD CONSTRAINT task_name_key UNIQUE (tkname);


--
-- Name: task task_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.task
    ADD CONSTRAINT task_pkey PRIMARY KEY (id);


--
-- Name: taskcategory taskcategory_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.taskcategory
    ADD CONSTRAINT taskcategory_pkey PRIMARY KEY (id);


--
-- Name: taskgroup taskgroup_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.taskgroup
    ADD CONSTRAINT taskgroup_pkey PRIMARY KEY (id);


--
-- Name: tasktype tasktype_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tasktype
    ADD CONSTRAINT tasktype_name_key UNIQUE (tename);


--
-- Name: tasktype tasktype_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tasktype
    ADD CONSTRAINT tasktype_pkey PRIMARY KEY (id);


--
-- Name: workflow workflow_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workflow
    ADD CONSTRAINT workflow_name_key UNIQUE (wwname);


--
-- Name: workflow workflow_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workflow
    ADD CONSTRAINT workflow_pkey PRIMARY KEY (id);


--
-- Name: application aplication_apptype_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.application
    ADD CONSTRAINT aplication_apptype_id_fkey FOREIGN KEY (apptype_id) REFERENCES public.apptype(id) ON DELETE CASCADE;


--
-- Name: application aplication_codelang_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.application
    ADD CONSTRAINT aplication_codelang_id_fkey FOREIGN KEY (codelang_id) REFERENCES public.codelang(id) ON DELETE CASCADE;


--
-- Name: task task_codelang_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.task
    ADD CONSTRAINT task_codelang_id_fkey FOREIGN KEY (codelang_id) REFERENCES public.codelang(id) ON DELETE CASCADE;


--
-- Name: task task_tasktype_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.task
    ADD CONSTRAINT task_tasktype_id_fkey FOREIGN KEY (tasktype_id) REFERENCES public.tasktype(id) ON DELETE CASCADE;


--
-- Name: task task_workflow_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.task
    ADD CONSTRAINT task_workflow_id_fkey FOREIGN KEY (workflow_id) REFERENCES public.workflow(id) ON DELETE CASCADE;


--
-- Name: task taskcategory_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.task
    ADD CONSTRAINT taskcategory_id_fkey FOREIGN KEY (taskcategory_id) REFERENCES public.taskgroup(id) ON DELETE CASCADE;


--
-- Name: taskcategory taskcategory_workflow_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.taskcategory
    ADD CONSTRAINT taskcategory_workflow_id_fkey FOREIGN KEY (workflow_id) REFERENCES public.workflow(id) ON DELETE CASCADE;


--
-- Name: taskgroup taskgroup_workflow_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.taskgroup
    ADD CONSTRAINT taskgroup_workflow_id_fkey FOREIGN KEY (workflow_id) REFERENCES public.workflow(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

