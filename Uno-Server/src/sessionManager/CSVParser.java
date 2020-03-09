package SessionManager;

import java.util.ArrayList;
//import java.util.List;

public class CSVParser {
	
	/**
	 * Método que traduce de cadena CSV a un ArrayList.
	 * @param String csv Cadena de formato CSV
	 * @return ArrayList<String[]>
	 * @version 0.1.0
	 * */
	public ArrayList<String[]> csv2arrayList(String csv) {
		ArrayList<String[]> result = new ArrayList<String[]>();
		
		String[] rows = csv.split("\n");
		for(int i = 0; i< rows.length; i++) {
			String[] columns = rows[i].split(",");
			result.add(columns);
		}
		
		return result;
	}
	
	/**
	 * Método que traduce de ArrayList a cadena CSV.
	 * @param ArrayList<String[]> list Arreglo contenedor de cadenas de texto
	 * @return String csv
	 * @version 0.1.0
	 * */
	public String arrayList2csv(ArrayList<String[]> list) {
		StringBuilder csv = new StringBuilder("");
		
		for( int i = 0; i < list.size(); i++ ) {
			csv.append( String.format("%s,%s", list.get(i)[0], list.get(i)[1]) );
			
			if( !(i==(list.size())-1) ) {
				csv.append("\n");
			}
		}
		
		return csv.toString();
	}
	
}
