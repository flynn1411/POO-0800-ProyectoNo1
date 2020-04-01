package Project;

import java.util.Random;

/** 
 * Generador de números aleatorios entre el rango de un minimo y un máximo.
 * @version 0.1.0
 * */
public class RandomGenerator {
	
	/** 
	 * Genera enteros aleatorios en un rango especifico.
	 * @param min Limite inferior del rango
	 * @param max Limite superior del rango
	 * @return randomInt Entero aleatorio que es generado.
	 * */
	public int generateRandom(int min, int max) {
		Random rand = new Random();
		int randomInt = rand.nextInt((max-min)+1) + min;
				
		return randomInt;
	}
}
