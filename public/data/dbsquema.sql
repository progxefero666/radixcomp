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
-- Name: proglanguage; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.proglanguage (
    id character(16) NOT NULL,
    name character varying(16) NOT NULL
);


ALTER TABLE public.proglanguage OWNER TO postgres;

--
-- Name: task; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.task (
    id character(16) NOT NULL,
    proglanguage_id character(16) NOT NULL,
    tasktype_id character(16) NOT NULL,
    workflow_id character(16) NOT NULL,
    taskcategory_id integer NOT NULL,
    orden integer NOT NULL,
    name character varying(255) NOT NULL,
    tkgroup integer NOT NULL,
    description text,
    files text,
    folders text
);


ALTER TABLE public.task OWNER TO postgres;

--
-- Name: taskcategory; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.taskcategory (
    id character(16) NOT NULL,
    workflow_id character(16) NOT NULL,
    name character varying(100) NOT NULL,
    description character varying(100)
);


ALTER TABLE public.taskcategory OWNER TO postgres;

--
-- Name: tasktype; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tasktype (
    id character(16) NOT NULL,
    name character varying(50) NOT NULL,
    description character varying(100)
);


ALTER TABLE public.tasktype OWNER TO postgres;

--
-- Name: template; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.template (
    id character(16) NOT NULL,
    name character varying(100) NOT NULL,
    proglanguage_id character(16) NOT NULL,
    datacode text NOT NULL
);


ALTER TABLE public.template OWNER TO postgres;

--
-- Name: workflow; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.workflow (
    id character(16) NOT NULL,
    name character varying(100) NOT NULL,
    description text,
    context text,
    application character varying(50),
    fpath character varying(500),
    updated date DEFAULT CURRENT_DATE NOT NULL
);


ALTER TABLE public.workflow OWNER TO postgres;

--
-- Name: proglanguage proglanguage_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proglanguage
    ADD CONSTRAINT proglanguage_pkey PRIMARY KEY (id);


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
-- Name: tasktype tasktype_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tasktype
    ADD CONSTRAINT tasktype_pkey PRIMARY KEY (id);


--
-- Name: template template_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.template
    ADD CONSTRAINT template_pkey PRIMARY KEY (id);


--
-- Name: workflow workflow_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workflow
    ADD CONSTRAINT workflow_pkey PRIMARY KEY (id);


--
-- Name: task task_proglanguage_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.task
    ADD CONSTRAINT task_proglanguage_id_fkey FOREIGN KEY (proglanguage_id) REFERENCES public.proglanguage(id) ON DELETE CASCADE;


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
-- Name: taskcategory taskcategory_workflow_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.taskcategory
    ADD CONSTRAINT taskcategory_workflow_id_fkey FOREIGN KEY (workflow_id) REFERENCES public.workflow(id) ON DELETE CASCADE;


--
-- Name: template template_proglanguage_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.template
    ADD CONSTRAINT template_proglanguage_id_fkey FOREIGN KEY (proglanguage_id) REFERENCES public.proglanguage(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

