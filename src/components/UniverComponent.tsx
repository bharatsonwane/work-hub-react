import React, { useEffect, useRef, useState } from "react";
import { LocaleType, Tools, Univer, UniverInstanceType } from "@univerjs/core";
import { FUniver } from "@univerjs/core/facade";
import { defaultTheme } from "@univerjs/design";

import { UniverFormulaEnginePlugin } from "@univerjs/engine-formula";
import { UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { UniverUIPlugin } from "@univerjs/ui";
import { UniverDocsPlugin } from "@univerjs/docs";
import { UniverDocsUIPlugin } from "@univerjs/docs-ui";
import { UniverSheetsPlugin } from "@univerjs/sheets";
import { UniverSheetsUIPlugin } from "@univerjs/sheets-ui";
import { UniverSheetsFormulaPlugin } from "@univerjs/sheets-formula";
import { UniverSheetsFormulaUIPlugin } from "@univerjs/sheets-formula-ui";
import { UniverSheetsNumfmtPlugin } from "@univerjs/sheets-numfmt";
import { UniverSheetsNumfmtUIPlugin } from "@univerjs/sheets-numfmt-ui";
import { UniverSheetsPrintPlugin } from "@univerjs-pro/sheets-print";
import { UniverSheetsChartPlugin } from "@univerjs-pro/sheets-chart";
import { UniverSheetsChartUIPlugin } from "@univerjs-pro/sheets-chart-ui";
import { UniverSheetsSortPlugin } from "@univerjs/sheets-sort";
import { UniverSheetsSortUIPlugin } from "@univerjs/sheets-sort-ui";
import { UniverSheetsFilterPlugin } from "@univerjs/sheets-filter";
import { UniverSheetsFilterUIPlugin } from "@univerjs/sheets-filter-ui";

// import { UniverDocsDrawingPlugin } from '@univerjs/docs-drawing';
import { UniverDrawingPlugin } from "@univerjs/drawing";
import { UniverDrawingUIPlugin } from "@univerjs/drawing-ui";
import { UniverSheetsDrawingPlugin } from "@univerjs/sheets-drawing";
import { UniverSheetsDrawingUIPlugin } from "@univerjs/sheets-drawing-ui";

import DesignEnUS from "@univerjs/design/locale/en-US";
import UIEnUS from "@univerjs/ui/locale/en-US";
import DocsUIEnUS from "@univerjs/docs-ui/locale/en-US";
import SheetsEnUS from "@univerjs/sheets/locale/en-US";
import SheetsUIEnUS from "@univerjs/sheets-ui/locale/en-US";
import SheetsFormulaUIEnUS from "@univerjs/sheets-formula-ui/locale/en-US";
import SheetsNumfmtUIEnUS from "@univerjs/sheets-numfmt-ui/locale/en-US";
import SheetsPrintPluginEnUS from "@univerjs-pro/sheets-print/locale/en-US";
import SheetsChartEnUS from "@univerjs-pro/sheets-chart/locale/en-US";
import SheetsChartUIEnUS from "@univerjs-pro/sheets-chart-ui/locale/en-US";
import DrawingUIEnUS from "@univerjs/drawing-ui/locale/en-US";
import SheetsDrawingUIEnUS from "@univerjs/sheets-drawing-ui/locale/en-US";
import SheetsSortEnUS from "@univerjs/sheets-sort/locale/en-US";
import SheetsSortUIEnUS from "@univerjs/sheets-sort-ui/locale/en-US";
import SheetsFilterUIEnUS from "@univerjs/sheets-filter-ui/locale/en-US";

// The Facade API here is optional, you can decide whether to introduce it based on your needs
import "@univerjs/sheets/facade";
import "@univerjs/sheets-sort/facade";
import "@univerjs/sheets-filter/facade";

import "@univerjs/design/lib/index.css";
import "@univerjs/ui/lib/index.css";
import "@univerjs/docs-ui/lib/index.css";
import "@univerjs/sheets-ui/lib/index.css";
import "@univerjs/sheets-formula-ui/lib/index.css";
import "@univerjs/sheets-numfmt-ui/lib/index.css";
import "@univerjs-pro/sheets-print/lib/index.css";
import "@univerjs/drawing-ui/lib/index.css";
import "@univerjs-pro/sheets-chart-ui/lib/index.css";
import "@univerjs/sheets-drawing-ui/lib/index.css";
import "@univerjs/sheets-sort-ui/lib/index.css";
import "@univerjs/sheets-filter-ui/lib/index.css";

import { UniverSheetsCustomMenuPlugin } from "../utils/plugins";
import CustomImportMenu from "../utils/plugins/controllers/menu/import.menu";
import CustomExportMenu from "../utils/plugins/controllers/menu/export.menu";
import CustomSaveMenu from "../utils/plugins/controllers/menu/save.menu";

const UniverComponent: React.FC = () => {
  const univerAPIRef = useRef<FUniver | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  const getUniverSnapshot = () => {
    const activeWorkbook = univerAPIRef.current?.getActiveWorkbook();
    if (!activeWorkbook) {
      throw new Error("Workbook is not initialized");
    }
    return activeWorkbook.save();
  };

  useEffect(() => {
    const init = () => {
      const univer = new Univer({
        theme: defaultTheme,
        locale: LocaleType.EN_US,
        locales: {
          [LocaleType.EN_US]: {
            ...DesignEnUS,
            ...UIEnUS,
            ...DocsUIEnUS,
            ...SheetsEnUS,
            ...SheetsUIEnUS,
            ...SheetsFormulaUIEnUS,
            ...SheetsNumfmtUIEnUS,
            ...SheetsSortEnUS,
            ...SheetsSortUIEnUS,
            ...SheetsFilterUIEnUS,
            ...SheetsPrintPluginEnUS,
            ...SheetsChartEnUS,
            ...SheetsChartUIEnUS,
            ...DrawingUIEnUS,
            ...SheetsDrawingUIEnUS
          },
        },
      });

      univerAPIRef.current = FUniver.newAPI(univer);

      univer.registerPlugin(UniverRenderEnginePlugin);
      univer.registerPlugin(UniverFormulaEnginePlugin);

      univer.registerPlugin(UniverUIPlugin, {
        container: containerRef.current!,
      });

      univer.registerPlugin(UniverDocsPlugin);
      univer.registerPlugin(UniverDocsUIPlugin);

      univer.registerPlugin(UniverSheetsPlugin);
      univer.registerPlugin(UniverSheetsUIPlugin);
      univer.registerPlugin(UniverSheetsFormulaPlugin);
      univer.registerPlugin(UniverSheetsFormulaUIPlugin);
      univer.registerPlugin(UniverSheetsNumfmtPlugin);
      univer.registerPlugin(UniverSheetsNumfmtUIPlugin);

      univer.registerPlugin(UniverSheetsSortPlugin as any, {});
      univer.registerPlugin(UniverSheetsSortUIPlugin as any, {});
      univer.registerPlugin(UniverSheetsFilterPlugin as any, {});
      univer.registerPlugin(UniverSheetsFilterUIPlugin as any, {});

      univer.registerPlugin(UniverDrawingPlugin);
      univer.registerPlugin(UniverDrawingUIPlugin);
      univer.registerPlugin(UniverSheetsDrawingPlugin);
      univer.registerPlugin(UniverSheetsDrawingUIPlugin);

      univer.registerPlugin(UniverSheetsPrintPlugin);

      univer.registerPlugin(UniverSheetsChartPlugin);
      univer.registerPlugin(UniverSheetsChartUIPlugin);

      univer.registerPlugin(UniverSheetsCustomMenuPlugin, {
        instance: univer,
        menu: [
          {
            operation: CustomSaveMenu({
              after: () => {
                const saveData = getUniverSnapshot();
                console.log(saveData);
              },
            }).operation,
            shortcut: CustomSaveMenu().shortcut,
            menu: () => CustomSaveMenu().menu!({} as any),
            icon: CustomSaveMenu().icon,
          },
          {
            operation: CustomImportMenu({
              before: () => {
                setLoading(true);
              },
              after: ({ error }: { error?: any }) => {
                setLoading(false);
                if (error) {
                  console.error(error.message || "Import failed");
                  return;
                }
                console.log("Import successful");
              },
            }).operation,
            shortcut: CustomImportMenu().shortcut,
            menu: () => CustomImportMenu().menu!(),
            icon: CustomImportMenu().icon,
          },
          {
            operation: CustomExportMenu({
              snapshot: getUniverSnapshot,
              after: (res: any) => {
                setLoading(false);
                if (res) {
                  console.error(res.message || "Export failed");
                } else {
                  console.log("Export successful");
                }
              },
            }).operation,
            shortcut: CustomExportMenu().shortcut,
            menu: () => CustomExportMenu().menu!(),
            icon: CustomExportMenu().icon,
          },
        ],
      });

      univer.createUnit(UniverInstanceType.UNIVER_SHEET, {});
    };

    init();
  }, []);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%" }}></div>
  );
};

export default UniverComponent;
