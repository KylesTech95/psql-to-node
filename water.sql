--
-- PostgreSQL database dump
--

-- Dumped from database version 13.14 (Debian 13.14-0+deb11u1)
-- Dumped by pg_dump version 13.14 (Debian 13.14-0+deb11u1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
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
-- Name: water_type; Type: TABLE; Schema: public; Owner: kylestech95
--

CREATE TABLE public.water_type (
    type_id integer NOT NULL,
    type_name character varying(60) NOT NULL,
    ph numeric(2,1)
);


ALTER TABLE public.water_type OWNER TO kylestech95;

--
-- Name: water_type_type_id_seq; Type: SEQUENCE; Schema: public; Owner: kylestech95
--

CREATE SEQUENCE public.water_type_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.water_type_type_id_seq OWNER TO kylestech95;

--
-- Name: water_type_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kylestech95
--

ALTER SEQUENCE public.water_type_type_id_seq OWNED BY public.water_type.type_id;


--
-- Name: water_type type_id; Type: DEFAULT; Schema: public; Owner: kylestech95
--

ALTER TABLE ONLY public.water_type ALTER COLUMN type_id SET DEFAULT nextval('public.water_type_type_id_seq'::regclass);


--
-- Data for Name: water_type; Type: TABLE DATA; Schema: public; Owner: kylestech95
--

COPY public.water_type (type_id, type_name, ph) FROM stdin;
\.


--
-- Name: water_type_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kylestech95
--

SELECT pg_catalog.setval('public.water_type_type_id_seq', 1, false);


--
-- Name: water_type water_type_pkey; Type: CONSTRAINT; Schema: public; Owner: kylestech95
--

ALTER TABLE ONLY public.water_type
    ADD CONSTRAINT water_type_pkey PRIMARY KEY (type_id);


--
-- PostgreSQL database dump complete
--

