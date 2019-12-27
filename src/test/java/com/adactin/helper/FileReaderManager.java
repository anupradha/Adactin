package com.adactin.helper;

import java.io.IOException;

public class FileReaderManager {
	public static FileReaderManager fr;

	private FileReaderManager() {
	}

	public static FileReaderManager getInstance() {
		fr = new FileReaderManager();
		return fr;

	}

	public ConfigurationReader getCrInstance() throws Exception {
		ConfigurationReader cr = new ConfigurationReader();
		return cr;
	}
}
