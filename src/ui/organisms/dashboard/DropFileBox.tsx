import { useRef, useState } from "react";

import csvLogo from "@assets/csv-logo.png";
import { ParseAndSetPasswords } from "../../../store/app/appThunks";
import { useAppDispatch } from "../../../app/hooks/storeHooks";

export const DropFileBox = () => {
    const dispatch = useAppDispatch();
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragOver, setIsDragOver] = useState(false);

    const processFile = (file: File | undefined) => {
        if (!file) return;
        dispatch(ParseAndSetPasswords(file));
    };

    const onDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (containerRef.current?.contains(e.relatedTarget as Node)) return;
        setIsDragOver(true);
    };

    const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (containerRef.current?.contains(e.relatedTarget as Node)) return;
        setIsDragOver(false);
    };

    const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragOver(false);
        const files = e.dataTransfer.files;
        if (files.length > 0) processFile(files[0]);
    };

    return (
        <div
            ref={containerRef}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDragOver={(e) => e.preventDefault()}
            onDrop={onDrop}
            style={{
                height: 400,
                width: 700,
                background: 'white',
                padding: isDragOver ? 0 : 20,
                borderRadius: 16,
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>

            <div style={{
                background: isDragOver ? '#E2EDF9' : '#F1F5FB',
                height: '100%',
                width: '100%',
                borderRadius: 16,
                border: isDragOver ? '3px none transparent' : '3px dashed #4355f88c',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                transition: 'all 0.8s ease',
                overflow: 'hidden'
            }}>

                <img
                    src={csvLogo}
                    style={{
                        height: 100,
                        width: 100,
                        objectFit: 'cover',
                        opacity: isDragOver ? 0.6 : 1,
                        transform: isDragOver ? 'scale(1.2) translateY(-10px)' : 'scale(1) translateY(0)',
                        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                />

                <div style={{
                    opacity: isDragOver ? 1 : 0,
                    maxHeight: isDragOver ? '100px' : '0px',
                    transform: isDragOver ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                    fontSize: '20px',
                    fontWeight: '500',
                    color: '#051a34',
                    pointerEvents: 'none',
                }}>
                    Drop your CSV file here.
                </div>

                <div style={{
                    opacity: isDragOver ? 0 : 1,
                    maxHeight: isDragOver ? '0px' : '300px',
                    transform: isDragOver ? 'scale(0.95)' : 'scale(1)',
                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 16,
                    marginTop: isDragOver ? 0 : 16,
                    pointerEvents: isDragOver ? 'none' : 'auto'
                }}>
                    <p style={{ fontSize: '20px', fontWeight: '500', color: '#051a34', margin: 0 }}>
                        Drag CSV password file here.
                    </p>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: 144,
                        color: '#888888',
                        fontSize: '20px',
                        fontWeight: 500
                    }}>
                        <div style={{ flex: 1, height: '3px', backgroundColor: '#cccccc', marginRight: '10px' }}></div>
                        <span>OR</span>
                        <div style={{ flex: 1, height: '3px', backgroundColor: '#cccccc', marginLeft: '10px' }}></div>
                    </div>

                    <label
                        htmlFor="file"
                        style={{
                            height: 48,
                            width: 156,
                            background: '#4354F8',
                            color: 'white',
                            textAlign: 'center',
                            cursor: 'pointer',
                            fontWeight: "bold",
                            fontSize: 20,
                            borderRadius: 8,
                            padding: '12px',
                            display: 'inline-block',
                        }}>
                        Browse files
                    </label>

                    <input
                        id="file"
                        type="file"
                        accept=".csv"
                        style={{ display: 'none' }}
                        onChange={(e) => processFile(e.target.files?.[0])}
                    />
                </div>
            </div>
        </div>
    );
};