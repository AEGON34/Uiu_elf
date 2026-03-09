
import { eventsData } from './eventsData';

// Import all images from ELF_Gallery folder
const galleryImages = import.meta.glob('../assets/ELF_Gallery/*/*.{png,jpg,jpeg,webp,JPG,JPEG,PNG,WEBP}', { eager: true });

function parseFolderName(folderName) {
    // Example: Presentation_Champs_Season_II_16_Jan_2026
    const parts = folderName.split('_');
    const year = parts[parts.length - 1];
    const month = parts[parts.length - 2];
    const day = parts[parts.length - 3];
    
    // Check if the date parts are valid
    const dateStr = `${day} ${month} ${year}`;
    const date = new Date(dateStr);
    
    let titleParts = parts.slice(0, parts.length - 3);
    let title = titleParts.join(' ');

    if (isNaN(date.getTime())) {
        // Fallback for folders that don't match the pattern exactly
        return {
            title: folderName.replace(/_/g, ' '),
            date: new Date(), // Default to now or handle appropriately
            dateString: 'Unknown Date',
            originalDateStr: folderName
        };
    }

    return {
        title,
        date,
        dateString: dateStr,
        originalDateStr: dateStr
    };
}

const processedImages = Object.keys(galleryImages).map((path) => {
    // path example: ../assets/ELF_Gallery/Presentation_Champs_Season_II_16_Jan_2026/DSC001.jpg
    const parts = path.split('/');
    const folderName = parts[parts.length - 2];
    
    const { title, date, dateString } = parseFolderName(folderName);
    
    // Try to find matching event in eventsData to get more details like venue, description
    const matchingEvent = eventsData.find(e => {
        // Simple fuzzy match or check if title includes parts of event title
        // eventsData title: "Presentation Champs – Season II"
        // parsed title: "Presentation Champs Season II"
        
        // Normalize spaces by replacing special chars and collapsing whitespace
        const cleanEventTitle = e.title.replace(/[^a-zA-Z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
        const cleanParsedTitle = title.replace(/[^a-zA-Z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
        
        return cleanEventTitle.includes(cleanParsedTitle) || cleanParsedTitle.includes(cleanEventTitle);
    });

    return {
        src: galleryImages[path].default,
        folder: folderName,
        title: matchingEvent ? matchingEvent.title : title,
        date: date, // Date object for sorting
        dateString: matchingEvent ? new Date(matchingEvent.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : dateString,
        year: date.getFullYear(),
        month: date.getMonth(),
        venue: matchingEvent ? matchingEvent.venue : 'UIU Campus',
        details: matchingEvent ? matchingEvent.details : `Photos from ${title}`,
        id: path // unique id
    };
});

// Sort by date descending
processedImages.sort((a, b) => b.date - a.date);

export const galleryData = processedImages;
