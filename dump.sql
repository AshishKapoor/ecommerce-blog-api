--
-- PostgreSQL database dump
--

-- Dumped from database version 10.4
-- Dumped by pg_dump version 11.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: author; Type: TABLE; Schema: public; Owner: ashishkapoor
--

CREATE TABLE public.author (
    id integer NOT NULL,
    "firstName" character varying(255),
    "lastName" character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.author OWNER TO ashishkapoor;

--
-- Name: author_id_seq; Type: SEQUENCE; Schema: public; Owner: ashishkapoor
--

CREATE SEQUENCE public.author_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.author_id_seq OWNER TO ashishkapoor;

--
-- Name: author_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ashishkapoor
--

ALTER SEQUENCE public.author_id_seq OWNED BY public.author.id;


--
-- Name: post; Type: TABLE; Schema: public; Owner: ashishkapoor
--

CREATE TABLE public.post (
    id integer NOT NULL,
    title character varying(255),
    content text NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "authorId" integer
);


ALTER TABLE public.post OWNER TO ashishkapoor;

--
-- Name: post_id_seq; Type: SEQUENCE; Schema: public; Owner: ashishkapoor
--

CREATE SEQUENCE public.post_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.post_id_seq OWNER TO ashishkapoor;

--
-- Name: post_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ashishkapoor
--

ALTER SEQUENCE public.post_id_seq OWNED BY public.post.id;


--
-- Name: author id; Type: DEFAULT; Schema: public; Owner: ashishkapoor
--

ALTER TABLE ONLY public.author ALTER COLUMN id SET DEFAULT nextval('public.author_id_seq'::regclass);


--
-- Name: post id; Type: DEFAULT; Schema: public; Owner: ashishkapoor
--

ALTER TABLE ONLY public.post ALTER COLUMN id SET DEFAULT nextval('public.post_id_seq'::regclass);


--
-- Data for Name: author; Type: TABLE DATA; Schema: public; Owner: ashishkapoor
--

COPY public.author (id, "firstName", "lastName", "createdAt", "updatedAt") FROM stdin;
1	Cornelius	Ortiz	2019-01-02 21:10:50.945+05:30	2019-01-02 21:10:50.945+05:30
2	Stephan	Feest	2019-01-02 21:10:50.945+05:30	2019-01-02 21:10:50.945+05:30
3	Janae	Herzog	2019-01-02 21:10:50.945+05:30	2019-01-02 21:10:50.945+05:30
4	Juwan	Tremblay	2019-01-02 21:10:50.945+05:30	2019-01-02 21:10:50.945+05:30
5	Maud	Zulauf	2019-01-02 21:10:50.945+05:30	2019-01-02 21:10:50.945+05:30
6	Libbie	Heidenreich	2019-01-02 21:10:50.945+05:30	2019-01-02 21:10:50.945+05:30
7	Trevion	Kertzmann	2019-01-02 21:10:50.945+05:30	2019-01-02 21:10:50.945+05:30
8	Eldora	Reichel	2019-01-02 21:10:50.945+05:30	2019-01-02 21:10:50.945+05:30
9	Robert	Schulist	2019-01-02 21:10:50.945+05:30	2019-01-02 21:10:50.945+05:30
10	Daisha	Homenick	2019-01-02 21:10:50.945+05:30	2019-01-02 21:10:50.945+05:30
11	Yvonne	Bernier	2019-01-02 21:10:51.873+05:30	2019-01-02 21:10:51.873+05:30
12	Chelsie	Ferry	2019-01-02 21:10:51.873+05:30	2019-01-02 21:10:51.873+05:30
13	Cale	Muller	2019-01-02 21:10:51.873+05:30	2019-01-02 21:10:51.873+05:30
14	Julio	Brakus	2019-01-02 21:10:51.873+05:30	2019-01-02 21:10:51.873+05:30
15	Nicholas	Hilpert	2019-01-02 21:10:51.873+05:30	2019-01-02 21:10:51.873+05:30
16	Missouri	Volkman	2019-01-02 21:10:51.873+05:30	2019-01-02 21:10:51.873+05:30
17	Ernesto	Rosenbaum	2019-01-02 21:10:51.873+05:30	2019-01-02 21:10:51.873+05:30
18	Ralph	Toy	2019-01-02 21:10:51.873+05:30	2019-01-02 21:10:51.873+05:30
19	Kelton	Fay	2019-01-02 21:10:51.873+05:30	2019-01-02 21:10:51.873+05:30
20	Zoila	Greenholt	2019-01-02 21:10:51.873+05:30	2019-01-02 21:10:51.873+05:30
21	Gisselle	Considine	2019-01-02 21:10:56.788+05:30	2019-01-02 21:10:56.788+05:30
22	Dolly	Homenick	2019-01-02 21:10:56.788+05:30	2019-01-02 21:10:56.788+05:30
23	Henri	Johnston	2019-01-02 21:10:56.788+05:30	2019-01-02 21:10:56.788+05:30
24	Nathanial	Johnson	2019-01-02 21:10:56.788+05:30	2019-01-02 21:10:56.788+05:30
25	Wallace	Gleichner	2019-01-02 21:10:56.788+05:30	2019-01-02 21:10:56.788+05:30
26	Kris	Bauch	2019-01-02 21:10:56.788+05:30	2019-01-02 21:10:56.788+05:30
27	Chaya	Hyatt	2019-01-02 21:10:56.788+05:30	2019-01-02 21:10:56.788+05:30
28	Silas	Connelly	2019-01-02 21:10:56.788+05:30	2019-01-02 21:10:56.788+05:30
29	Rosemarie	Bernier	2019-01-02 21:10:56.788+05:30	2019-01-02 21:10:56.788+05:30
30	Emily	Treutel	2019-01-02 21:10:56.788+05:30	2019-01-02 21:10:56.788+05:30
\.


--
-- Data for Name: post; Type: TABLE DATA; Schema: public; Owner: ashishkapoor
--

COPY public.post (id, title, content, "createdAt", "updatedAt", "authorId") FROM stdin;
\.


--
-- Name: author_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ashishkapoor
--

SELECT pg_catalog.setval('public.author_id_seq', 30, true);


--
-- Name: post_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ashishkapoor
--

SELECT pg_catalog.setval('public.post_id_seq', 1, false);


--
-- Name: author author_pkey; Type: CONSTRAINT; Schema: public; Owner: ashishkapoor
--

ALTER TABLE ONLY public.author
    ADD CONSTRAINT author_pkey PRIMARY KEY (id);


--
-- Name: post post_pkey; Type: CONSTRAINT; Schema: public; Owner: ashishkapoor
--

ALTER TABLE ONLY public.post
    ADD CONSTRAINT post_pkey PRIMARY KEY (id);


--
-- Name: post post_authorId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ashishkapoor
--

ALTER TABLE ONLY public.post
    ADD CONSTRAINT "post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES public.author(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- PostgreSQL database dump complete
--

