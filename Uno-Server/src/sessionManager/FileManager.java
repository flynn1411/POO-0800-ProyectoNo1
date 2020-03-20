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
	 * @param fileName Nombre del archivo
	 * @version 0.1.0
	 * */
	public String getPath(String fileName) {
		String path;
		
		try {
			File f = new File( String.format("%s%s", this.directory, fileName) );
			path = f.getAbsolutePath().toString();
			
			return path;
			
		}catch(Exception e) {
			return "Not Found";
		}
	}
	
	/** 
	 * Lector de archivos, si existen.
	 * @param fileName Nombre del archivo que se desea leer.
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
			return "Not Found";
		}
		
		return content.toString();
	}
	
	
	/** 
	 * Funcion que escribe en un archivo dado el nombre y contenido.
	 * Si el archivo no existe, se crea y si ya existe se sobreescribe.
	 * @param fileName Nombre del archivo
	 * @param content Contenido del archivo.
	 * */
	public boolean write(String fileName, String content) {
		try {
			File newFile = new File( String.format("%s%s", this.directory, fileName) );
			
			/**Se revisa si no existe el directorio, entonces se crea el directorio.*/
			if(!newFile.exists()) {
				String directory  = this.directory;
				
				if(fileName.contains("/")) {
					String[] newFileName;
					newFileName = fileName.split("/");
					directory = String.format("%s%s/", this.directory, newFileName[0]);
					fileName = newFileName[1];
				}
				
				File newDir = new File(directory);
				newDir.mkdir();
			}
			
			FileOutputStream fos = new FileOutputStream( newFile );
			
			try {
				byte[] strToBytes = content.getBytes();
			
				fos.write(strToBytes);
				
			}finally {
				fos.close();
			}
			
		}
		catch(Exception e) {
			return false;
		}
		
		return true;
	}
	
	/** 
	 * Busca si el archivo existe en el directorio indicado, si no existe se envia un arreglo especifico.
	 * Si existe el método devuelve el nombre del archivo encontrado.
	 * @param fileName Nombre del archivo a buscar.
	 * */
	public String getName(String fileName) {
		File parent = new File(this.directory);
		File f = new File(parent, fileName);
		
		if(!f.exists()) {
			return "Not Found";
		}
		else {
			return String.format("%s", f.getName());
		}
	}
	
	/**
	 * Metódo para borrar un archivo.
	 * @param String fileName Nombre del archivo a borrar.
	 * @return @true si fue borrado, @false en el caso contrario.
	 * */
	public boolean deleteFile(String fileName) {
		File file = new File( String.format("%s%s", this.directory, fileName) );
		
		return file.delete();
	}
	
	/**
	 * Metódo para poder identificar si un archivo existe o no.
	 * @param String fileName Nombre del archivo
	 * @return @true si existe, @false de lo contrario
	 * */
	public boolean fileExists(String fileName) {
		File file = new File( String.format("%s%s", this.directory, fileName) );
		
		return file.exists();
	}
	
}