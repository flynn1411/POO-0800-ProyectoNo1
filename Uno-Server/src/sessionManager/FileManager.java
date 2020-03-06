package SessionManager;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStreamReader;

/** 
 * Unica clase que puede ingresar a la base de datos, hace lectura y escritura de archivos.
 * @version 0.1.0
 * */
public class FileManager {
	/** directorio actual*/
	private String directory;
	
	public FileManager() {
		this.directory = "DataBase/";
	}
	
	public FileManager(String directory) {
		this.directory = directory;
	}
	
	/** 
	 * Metódo que obtiene el directorio actal de donde se trabaja.
	 * @param fileName: Nombre del archivo
	 * @version 0.1.0
	 * */
	public String getPath(String fileName) {
		String path;
		
		try {
			File f = new File("DataBase/prueba.txt");
			path = f.getAbsolutePath().toString();
			
			return path;
			
		}catch(Exception e) {
			return "El archivo no se encuentra.";
		}
	}
	
	/** 
	 * Lector de archivos, si existen.
	 * @param fileName: Nombre del archivo que se desea leer.
	 * @version 0.1.0
	 * */
	public String read(String fileName) {
		StringBuilder content = new StringBuilder("");
		
		try {
			File parent = new File(this.directory);
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
	
	
	/** 
	 * Funcion que escribe en un archivo dado el nombre y contenido.
	 * Si el archivo no existe, se crea y si ya existe se sobreescribe.
	 * @param fileName: Nombre del archivo
	 * @param content: Contenido del archivo.
	 * */
	public boolean write(String fileName, String content) {
		try {
			FileOutputStream fos = new FileOutputStream( String.format("%s%s", this.directory, fileName) );
			byte[] strToBytes = content.getBytes();
			
			fos.write(strToBytes);
			fos.close();
			return true;
		}
		catch(Exception e) {
			return false;
		}
	}
	
}