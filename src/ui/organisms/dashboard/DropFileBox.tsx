import { useRef, useState } from "react";
import Papa from "papaparse";
export const DropFileBox = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragOver, setIsDragOver] = useState(false);

    const onDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (containerRef.current?.contains(e.relatedTarget as Node)) {
            return;
        }
        setIsDragOver(true);
    };

    const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (containerRef.current?.contains(e.relatedTarget as Node)) {
            return;
        }
        setIsDragOver(false);
    };

    const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragOver(false);
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            Papa.parse(files[0], {
                complete: function (results) {
                    console.log(results);
                }
            });
        }
    };

    return (
        <div
            ref={containerRef}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDragOver={onDragOver}
            onDrop={onDrop}
            style={{
                height: 400,
                width: 700,
                background: 'white',
                borderWidth: isDragOver ? "0px" : "2px",
                borderColor: 'white',
                borderStyle: 'solid',
                padding: isDragOver ? 0 : 20,
                borderRadius: 16,
                transition: 'padding 0.3s ease',
            }}>
            <div
                style={{
                    background: isDragOver ? '#E2EDF9' : '#F1F5FB',
                    height: '100%',
                    width: '100%',
                    borderRadius: 16,
                    borderWidth: isDragOver ? "0px" : "3px",
                    borderColor: isDragOver ? 'transparent' : '#4355f88c',
                    borderStyle: 'dashed',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    transition: 'border-color 0.3s ease',
                }}>
                {isDragOver ?

                    <div>Drop your csv</div>
                    :
                    <div>
                        Drag CSV file
                        <div>or</div>
                        <label htmlFor="file"
                            style={{
                                height: 40,
                                width: 140,
                                background: '#4354F8',
                                color: 'white',
                                textAlign: 'center',
                                cursor: 'pointer',
                                borderRadius: 8,
                                padding: 10,
                                display: 'inline-block'
                            }}
                        >
                            Browse Files
                        </label>
                        <input
                            id="file"
                            style={{ display: 'none' }}
                            type="file"
                            name="file"
                            accept=".csv"
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                    Papa.parse(file, {
                                        complete: function (results) {
                                            console.log(results);
                                        }
                                    });
                                }

                            }}
                        />
                    </div>
                }

            </div>
        </div>
    );
};