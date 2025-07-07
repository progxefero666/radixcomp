//src\radix\viewer\jsonviewer.tsx
import sqlTypesData from "@/codegen/kernel/sqltypes.json";

import React, { useState, useEffect } from 'react';
import { createRoot } from "react-dom/client";

import ReactJsonPretty from 'react-json-pretty';
import '@/style/monikai.css';

/*
    <ReactJsonPretty data={jsonobj}
        className="text-sm font-mono" />

*/                        