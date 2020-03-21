package SessionManager;

import java.util.ArrayList;
//import java.util.List;

public class CSVParser {
	
	/**
	 * Método que traduce de cadena CSV a un ArrayList de cartas.
	 * @param String csv Cadena de formato CSV
	 * @return ArrayList<String[]>
	 * @version 0.1.0
	 * */
	public ArrayList<Card> csv2arrayList(String csv) {
		ArrayList<Card> result = new ArrayList<Card>();
		
		String[] rows = csv.split("\n");
		for(int i = 0; i< rows.length; i++) {
			String[] columns = rows[i].split(",");
			result.add( new Card(columns[0], columns[1]) );
		}
		
		return result;
	}
	
	/**
	 * Método que traduce de ArrayList a cadena CSV.
	 * @param ArrayList<Card> list Arreglo contenedor de cartas
	 * @return String csv
	 * @version 0.1.0
	 * */
	public String arrayList2csv(ArrayList< Card > list) {
		StringBuilder csv = new StringBuilder("");
		
		for( int i = 0; i < list.size(); i++ ) {
			csv.append( String.format("%s,%s", list.get(i).getSymbol(), list.get(i).getColor() ) );
			
			if( !(i==(list.size())-1) ) {
				csv.append("\n");
			}
		}
		
		return csv.toString();
	}
	
}
