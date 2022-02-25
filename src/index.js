import * as gcpdfviewer from '@grapecity/gcpdfviewer';
import repQuickStartSample from './pdfs/diodocs_a4_full.pdf';

var viewer = new gcpdfviewer.GcPdfViewer('#pdfviewer', { /* Specify options here */ }
    );
    viewer.addDefaultPanels();
    viewer.open(repQuickStartSample);