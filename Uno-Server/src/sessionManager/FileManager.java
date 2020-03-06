package sessionManager;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStreamReader;

/** 
 * Unica clase que puede ingresar a la base de datos, hace lectura y escritura de archivos.
 * @version 0.10
 * */
public class FileManager {
	/** directorio actual*/
	private String directory;
	
	public FileManager() {
		this.directory = "../../../DataBase/";
	}
	
	public FileManager(String directory) {
		this.directory = directory;
	}
	
	public String getPath(String fileName) {
		String path;
		
		File f = new File("..");
		path = f.getAbsolutePath().toString();
		
		return path;
	}
	
	public String read(String fileName) {
		StringBuilder content = new StringBuilder("");
		
		try {
			File parent = new File(directory);
			File f = new File(parent, fileName);
			FileInputStream fis = new FileInputStream(f);
			InputStreamReader isr = new InputStreamReader(fis);
			BufferedReader br = new BufferedReader(isr);
			
			try {
				String line;
							
				while( (line = br.readLine()) != null ) {
					content.append(line);
					content.append("\n");
				}
							
			}finally {
				br.close();
							
			}
		}catch(Exception e) {
			System.out.print(String.format("%s", e));
		}
		
		return content.toString();
	}
}
