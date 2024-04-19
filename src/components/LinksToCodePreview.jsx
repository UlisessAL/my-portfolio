import GithubIcon from "./icons/GithubIcon";
import PaperclipIcon from "./icons/PaperclipIcon";

const LinksToCodePreview = ({ github, page }) => {
  return (
    <div className="flex gap-2">
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >
          <GithubIcon />
          Código
        </a>
      )}

      {page && (
        <a
          href={page}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >
          <PaperclipIcon />
          Página
        </a>
      )}
    </div>
  );
};
export default LinksToCodePreview;
