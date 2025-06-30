
--
-- Name: agent; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.agent (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    agtype character varying(50) NOT NULL,
    application character varying(150) DEFAULT 'undefined'::character varying NOT NULL,
    description character varying(255) DEFAULT 'undefined'::character varying NOT NULL,
    config text DEFAULT 'undefined'::text NOT NULL,
    motor character varying(100) DEFAULT 'undefined'::character varying NOT NULL,
    username character varying(50) DEFAULT 'undefined'::character varying NOT NULL,
    userpassword character varying(50) DEFAULT 'undefined'::character varying NOT NULL,
    port character varying(10) DEFAULT 'undefined'::character varying NOT NULL,
    url character varying(250) DEFAULT 'undefined'::character varying NOT NULL,
    scriptstart text DEFAULT 'undefined'::text NOT NULL,
    scriptstop text DEFAULT 'undefined'::text NOT NULL,
    scriptscheck text DEFAULT 'undefined'::text NOT NULL
);


ALTER TABLE public.agent OWNER TO postgres;

--
-- Name: agent_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.agent ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.agent_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: application; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.application (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    reference character varying(50) DEFAULT 'undefined'::character varying NOT NULL,
    author character varying(100) NOT NULL,
    apptype character varying(50) NOT NULL,
    proglanguage character varying(50) DEFAULT 'undefined'::character varying NOT NULL,
    osystem character varying(100) DEFAULT 'windows'::character varying NOT NULL,
    appurl character varying(500) DEFAULT 'undefined'::character varying NOT NULL,
    apppath character varying(500) DEFAULT 'undefined'::character varying NOT NULL,
    localdev boolean DEFAULT true NOT NULL,
    usedocker boolean DEFAULT false NOT NULL,
    creationdate date DEFAULT CURRENT_DATE NOT NULL,
    updatedate date DEFAULT CURRENT_DATE NOT NULL,
    description character varying(255) NOT NULL,
    controlusers boolean DEFAULT false NOT NULL,
    useui boolean DEFAULT false NOT NULL,
    useagents boolean DEFAULT false NOT NULL,
    consumedb boolean DEFAULT false NOT NULL,
    consumeapi boolean DEFAULT false NOT NULL,
    consumeai boolean DEFAULT false NOT NULL,
    exposedb boolean DEFAULT false NOT NULL,
    exposeapi boolean DEFAULT false NOT NULL
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
-- Name: apptypes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.apptypes (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    description character varying(255) NOT NULL
);


ALTER TABLE public.apptypes OWNER TO postgres;

--
-- Name: apptypes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.apptypes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.apptypes_id_seq OWNER TO postgres;

--
-- Name: apptypes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.apptypes_id_seq OWNED BY public.apptypes.id;


--
-- Name: doccategory; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.doccategory (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    description character varying(255) DEFAULT 'undefined'::character varying NOT NULL
);


ALTER TABLE public.doccategory OWNER TO postgres;

--
-- Name: doccategory_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.doccategory_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.doccategory_id_seq OWNER TO postgres;

--
-- Name: doccategory_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.doccategory_id_seq OWNED BY public.doccategory.id;


--
-- Name: docprojanalisis; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.docprojanalisis (
    id integer NOT NULL,
    project character varying(50) NOT NULL,
    updatedate date DEFAULT CURRENT_DATE NOT NULL,
    dtype character varying(50) NOT NULL,
    dcategory character varying(50) NOT NULL,
    content text DEFAULT 'undefined'::text NOT NULL,
    durl character varying(50) NOT NULL,
    dpath character varying(50) NOT NULL
);


ALTER TABLE public.docprojanalisis OWNER TO postgres;

--
-- Name: docprojanalisis_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.docprojanalisis_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.docprojanalisis_id_seq OWNER TO postgres;

--
-- Name: docprojanalisis_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.docprojanalisis_id_seq OWNED BY public.docprojanalisis.id;


--
-- Name: doctype; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.doctype (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    dataformat character varying(50) NOT NULL,
    description character varying(255) DEFAULT 'undefined'::character varying NOT NULL
);


ALTER TABLE public.doctype OWNER TO postgres;

--
-- Name: doctype_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.doctype_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.doctype_id_seq OWNER TO postgres;

--
-- Name: doctype_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.doctype_id_seq OWNED BY public.doctype.id;


--
-- Name: proglanguage; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.proglanguage (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    description character varying(255) NOT NULL
);


ALTER TABLE public.proglanguage OWNER TO postgres;

--
-- Name: proglanguage_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.proglanguage_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.proglanguage_id_seq OWNER TO postgres;

--
-- Name: proglanguage_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.proglanguage_id_seq OWNED BY public.proglanguage.id;


--
-- Name: server; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.server (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    srvtype character varying(50) NOT NULL,
    description character varying(255) DEFAULT 'undefined'::character varying NOT NULL,
    config text DEFAULT 'undefined'::text NOT NULL,
    usedocker boolean DEFAULT false NOT NULL,
    useclaude boolean DEFAULT false NOT NULL,
    motor character varying(100) DEFAULT 'undefined'::character varying NOT NULL,
    username character varying(50) DEFAULT 'undefined'::character varying NOT NULL,
    userpassword character varying(50) DEFAULT 'undefined'::character varying NOT NULL,
    application character varying(150) DEFAULT 'undefined'::character varying NOT NULL,
    dbversion character varying(50) DEFAULT 'undefined'::character varying NOT NULL,
    port character varying(10) DEFAULT 'undefined'::character varying NOT NULL,
    url character varying(250) DEFAULT 'undefined'::character varying NOT NULL,
    exposedb boolean DEFAULT false NOT NULL,
    exposeapi boolean DEFAULT false NOT NULL,
    scriptstart text DEFAULT 'undefined'::text NOT NULL,
    scriptstop text DEFAULT 'undefined'::text NOT NULL,
    scriptscheck text DEFAULT 'undefined'::text NOT NULL
);


ALTER TABLE public.server OWNER TO postgres;

--
-- Name: server_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.server ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.server_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: service; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.service (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    stype character varying(50) NOT NULL,
    application character varying(150) DEFAULT 'undefined'::character varying NOT NULL,
    description character varying(255) DEFAULT 'undefined'::character varying NOT NULL,
    config text DEFAULT 'undefined'::text NOT NULL,
    motor character varying(100) DEFAULT 'undefined'::character varying NOT NULL,
    dbversion character varying(10) DEFAULT 'undefined'::character varying NOT NULL,
    username character varying(50) DEFAULT 'undefined'::character varying NOT NULL,
    userpassword character varying(50) DEFAULT 'undefined'::character varying NOT NULL,
    port character varying(10) DEFAULT 'undefined'::character varying NOT NULL,
    url character varying(250) DEFAULT 'undefined'::character varying NOT NULL,
    scriptstart text DEFAULT 'undefined'::text NOT NULL,
    scriptstop text DEFAULT 'undefined'::text NOT NULL,
    scriptscheck text DEFAULT 'undefined'::text NOT NULL
);


ALTER TABLE public.service OWNER TO postgres;

--
-- Name: service_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.service ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.service_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: tasktype; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tasktype (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    description text
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
-- Name: task; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.task (
    id integer NOT NULL,
    workflow_id integer,
    name character varying(255) NOT NULL,
    wtype character varying(100) NOT NULL,
    description text,
    files text,
    folders text,
    task_order integer NOT NULL,
    is_final_task boolean DEFAULT false
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
-- Name: workflow; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.workflow (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    context_codelang character varying(50),
    context_main character varying(255),
    context_app character varying(255),
    context_folder character varying(255),
    context_libs text,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
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
-- Name: apptypes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.apptypes ALTER COLUMN id SET DEFAULT nextval('public.apptypes_id_seq'::regclass);


--
-- Name: doccategory id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.doccategory ALTER COLUMN id SET DEFAULT nextval('public.doccategory_id_seq'::regclass);


--
-- Name: docprojanalisis id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.docprojanalisis ALTER COLUMN id SET DEFAULT nextval('public.docprojanalisis_id_seq'::regclass);


--
-- Name: doctype id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.doctype ALTER COLUMN id SET DEFAULT nextval('public.doctype_id_seq'::regclass);


--
-- Name: proglanguage id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proglanguage ALTER COLUMN id SET DEFAULT nextval('public.proglanguage_id_seq'::regclass);


--
-- Name: task id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.task ALTER COLUMN id SET DEFAULT nextval('public.task_id_seq'::regclass);


--
-- Name: tasktype id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tasktype ALTER COLUMN id SET DEFAULT nextval('public.tasktype_id_seq'::regclass);


--
-- Name: workflow id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workflow ALTER COLUMN id SET DEFAULT nextval('public.workflow_id_seq'::regclass);


--
-- Name: agent agent_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.agent
    ADD CONSTRAINT agent_pkey PRIMARY KEY (id);


--
-- Name: application application_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.application
    ADD CONSTRAINT application_pkey PRIMARY KEY (id);


--
-- Name: apptypes apptypes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.apptypes
    ADD CONSTRAINT apptypes_pkey PRIMARY KEY (id);


--
-- Name: doccategory doccategory_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.doccategory
    ADD CONSTRAINT doccategory_pkey PRIMARY KEY (id);


--
-- Name: docprojanalisis docprojanalisis_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.docprojanalisis
    ADD CONSTRAINT docprojanalisis_pkey PRIMARY KEY (id);


--
-- Name: doctype doctype_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.doctype
    ADD CONSTRAINT doctype_pkey PRIMARY KEY (id);


--
-- Name: proglanguage proglanguage_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proglanguage
    ADD CONSTRAINT proglanguage_pkey PRIMARY KEY (id);


--
-- Name: server server_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.server
    ADD CONSTRAINT server_pkey PRIMARY KEY (id);


--
-- Name: task task_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.task
    ADD CONSTRAINT task_pkey PRIMARY KEY (id);


--
-- Name: tasktype tasktype_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tasktype
    ADD CONSTRAINT tasktype_name_key UNIQUE (name);


--
-- Name: tasktype tasktype_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tasktype
    ADD CONSTRAINT tasktype_pkey PRIMARY KEY (id);


--
-- Name: workflow workflow_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workflow
    ADD CONSTRAINT workflow_pkey PRIMARY KEY (id);


--
-- Name: task task_workflow_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.task
    ADD CONSTRAINT task_workflow_id_fkey FOREIGN KEY (workflow_id) REFERENCES public.workflow(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

